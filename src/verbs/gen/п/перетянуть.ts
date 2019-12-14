import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перетянуть: PerfectVerb = {
  name: Word('перетянуть', 7),
  singular1stPerson: Word('перетяну', 7),
  singular2ndPerson: Word('перетянешь', 5),
  singular3rdPerson: Word('перетянет', 5),
  plural1stPerson: Word('перетянем', 5),
  plural2ndPerson: Word('перетянете', 5),
  plural3rdPerson: Word('перетянут', 5),
  masculinePast: Word('перетянул', 7),
  femininePast: Word('перетянула', 7),
  neuterPast: Word('перетянуло', 7),
  pluralPast: Word('перетянули', 7),
  imperativeInformal: Word('перетяни', 7),
  imperativeFormal: Word('перетяните', 7),
  imperfect: [],
};

perfectVerbs.set(перетянуть.name.text, перетянуть);

export { перетянуть };
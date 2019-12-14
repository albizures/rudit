import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перебелить: PerfectVerb = {
  name: Word('перебелить', 7),
  singular1stPerson: Word('перебелю', 7),
  singular2ndPerson: Word('перебелишь', 5),
  singular3rdPerson: Word('перебелит', 5),
  plural1stPerson: Word('перебелим', 5),
  plural2ndPerson: Word('перебелите', 5),
  plural3rdPerson: Word('перебелят', 5),
  masculinePast: Word('перебелил', 7),
  femininePast: Word('перебелила', 7),
  neuterPast: Word('перебелило', 7),
  pluralPast: Word('перебелили', 7),
  imperativeInformal: Word('перебели', 7),
  imperativeFormal: Word('перебелите', 7),
  imperfect: [],
};

perfectVerbs.set(перебелить.name.text, перебелить);

export { перебелить };
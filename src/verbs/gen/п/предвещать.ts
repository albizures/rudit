import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const предвещать: PerfectVerb = {
  name: Word('предвещать', 7),
  singular1stPerson: Word('предвещаю', 7),
  singular2ndPerson: Word('предвещаешь', 7),
  singular3rdPerson: Word('предвещает', 7),
  plural1stPerson: Word('предвещаем', 7),
  plural2ndPerson: Word('предвещаете', 7),
  plural3rdPerson: Word('предвещают', 7),
  masculinePast: Word('предвещал', 7),
  femininePast: Word('предвещала', 7),
  neuterPast: Word('предвещало', 7),
  pluralPast: Word('предвещали', 7),
  imperativeInformal: Word('предвещай', 7),
  imperativeFormal: Word('предвещайте', 7),
  imperfect: [],
};

perfectVerbs.set(предвещать.name.text, предвещать);

export { предвещать };
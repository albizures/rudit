import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const предначертать: PerfectVerb = {
  name: Word('предначертать', 10),
  singular1stPerson: Word('предначертаю', 10),
  singular2ndPerson: Word('предначертаешь', 10),
  singular3rdPerson: Word('предначертает', 10),
  plural1stPerson: Word('предначертаем', 10),
  plural2ndPerson: Word('предначертаете', 10),
  plural3rdPerson: Word('предначертают', 10),
  masculinePast: Word('предначертал', 10),
  femininePast: Word('предначертала', 10),
  neuterPast: Word('предначертало', 10),
  pluralPast: Word('предначертали', 10),
  imperativeInformal: Word('предначертай', 10),
  imperativeFormal: Word('предначертайте', 10),
  imperfect: [],
};

perfectVerbs.set(предначертать.name.text, предначертать);

export { предначертать };
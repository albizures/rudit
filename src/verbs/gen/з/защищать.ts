import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const защищать: PerfectVerb = {
  name: Word('защищать', 5),
  singular1stPerson: Word('защищаю', 5),
  singular2ndPerson: Word('защищаешь', 5),
  singular3rdPerson: Word('защищает', 5),
  plural1stPerson: Word('защищаем', 5),
  plural2ndPerson: Word('защищаете', 5),
  plural3rdPerson: Word('защищают', 5),
  masculinePast: Word('защищал', 5),
  femininePast: Word('защищала', 5),
  neuterPast: Word('защищало', 5),
  pluralPast: Word('защищали', 5),
  imperativeInformal: Word('защищай', 5),
  imperativeFormal: Word('защищайте', 5),
  imperfect: ['защитить'],
};

perfectVerbs.set(защищать.name.text, защищать);

export { защищать };
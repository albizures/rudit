import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const снабжать: PerfectVerb = {
  name: Word('снабжать', 5),
  singular1stPerson: Word('снабжаю', 5),
  singular2ndPerson: Word('снабжаешь', 5),
  singular3rdPerson: Word('снабжает', 5),
  plural1stPerson: Word('снабжаем', 5),
  plural2ndPerson: Word('снабжаете', 5),
  plural3rdPerson: Word('снабжают', 5),
  masculinePast: Word('снабжал', 5),
  femininePast: Word('снабжала', 5),
  neuterPast: Word('снабжало', 5),
  pluralPast: Word('снабжали', 5),
  imperativeInformal: Word('снабжай', 5),
  imperativeFormal: Word('снабжайте', 5),
  imperfect: ['[[снабдить'],
};

perfectVerbs.set(снабжать.name.text, снабжать);

export { снабжать };
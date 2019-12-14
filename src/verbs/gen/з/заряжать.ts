import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заряжать: PerfectVerb = {
  name: Word('заряжать', 5),
  singular1stPerson: Word('заряжаю', 5),
  singular2ndPerson: Word('заряжаешь', 5),
  singular3rdPerson: Word('заряжает', 5),
  plural1stPerson: Word('заряжаем', 5),
  plural2ndPerson: Word('заряжаете', 5),
  plural3rdPerson: Word('заряжают', 5),
  masculinePast: Word('заряжал', 5),
  femininePast: Word('заряжала', 5),
  neuterPast: Word('заряжало', 5),
  pluralPast: Word('заряжали', 5),
  imperativeInformal: Word('заряжай', 5),
  imperativeFormal: Word('заряжайте', 5),
  imperfect: ['зарядить'],
};

perfectVerbs.set(заряжать.name.text, заряжать);

export { заряжать };
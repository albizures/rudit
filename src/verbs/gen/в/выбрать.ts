import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выбрать: PerfectVerb = {
  name: Word('выбрать', 1),
  singular1stPerson: Word('выберу', 1),
  singular2ndPerson: Word('выберешь', 1),
  singular3rdPerson: Word('выберет', 1),
  plural1stPerson: Word('выберем', 1),
  plural2ndPerson: Word('выберете', 1),
  plural3rdPerson: Word('выберут', 1),
  masculinePast: Word('выбрал', 1),
  femininePast: Word('выбрала', 1),
  neuterPast: Word('выбрало', 1),
  pluralPast: Word('выбрали', 1),
  imperativeInformal: Word('выбери', 1),
  imperativeFormal: Word('выберите', 1),
  imperfect: ['выбирать'],
};

perfectVerbs.set(выбрать.name.text, выбрать);

export { выбрать };
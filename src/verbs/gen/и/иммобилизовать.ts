import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const иммобилизовать: PerfectVerb = {
  name: Word('иммобилизовать', 11),
  singular1stPerson: Word('иммобилизую', 9),
  singular2ndPerson: Word('иммобилизуешь', 9),
  singular3rdPerson: Word('иммобилизует', 9),
  plural1stPerson: Word('иммобилизуем', 9),
  plural2ndPerson: Word('иммобилизуете', 9),
  plural3rdPerson: Word('иммобилизуют', 9),
  masculinePast: Word('иммобилизовал', 11),
  femininePast: Word('иммобилизовала', 11),
  neuterPast: Word('иммобилизовало', 11),
  pluralPast: Word('иммобилизовали', 11),
  imperativeInformal: Word('иммобилизуй', 9),
  imperativeFormal: Word('иммобилизуйте', 9),
  imperfect: [],
};

perfectVerbs.set(иммобилизовать.name.text, иммобилизовать);

export { иммобилизовать };
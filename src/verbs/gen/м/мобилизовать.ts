import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const мобилизовать: PerfectVerb = {
  name: Word('мобилизовать', 9),
  singular1stPerson: Word('мобилизую', 7),
  singular2ndPerson: Word('мобилизуешь', 7),
  singular3rdPerson: Word('мобилизует', 7),
  plural1stPerson: Word('мобилизуем', 7),
  plural2ndPerson: Word('мобилизуете', 7),
  plural3rdPerson: Word('мобилизуют', 7),
  masculinePast: Word('мобилизовал', 9),
  femininePast: Word('мобилизовала', 9),
  neuterPast: Word('мобилизовало', 9),
  pluralPast: Word('мобилизовали', 9),
  imperativeInformal: Word('мобилизуй', 7),
  imperativeFormal: Word('мобилизуйте', 7),
  imperfect: [],
};

perfectVerbs.set(мобилизовать.name.text, мобилизовать);

export { мобилизовать };
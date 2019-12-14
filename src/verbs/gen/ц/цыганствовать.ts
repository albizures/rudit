import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const цыганствовать: PerfectVerb = {
  name: Word('цыганствовать', 3),
  singular1stPerson: Word('цыганствую', 3),
  singular2ndPerson: Word('цыганствуешь', 3),
  singular3rdPerson: Word('цыганствует', 3),
  plural1stPerson: Word('цыганствуем', 3),
  plural2ndPerson: Word('цыганствуете', 3),
  plural3rdPerson: Word('цыганствуют', 3),
  masculinePast: Word('цыганствовал', 3),
  femininePast: Word('цыганствовала', 3),
  neuterPast: Word('цыганствовало', 3),
  pluralPast: Word('цыганствовали', 3),
  imperativeInformal: Word('цыганствуй', 3),
  imperativeFormal: Word('цыганствуйте', 3),
  imperfect: [],
};

perfectVerbs.set(цыганствовать.name.text, цыганствовать);

export { цыганствовать };
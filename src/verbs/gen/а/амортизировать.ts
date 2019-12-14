import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const амортизировать: PerfectVerb = {
  name: Word('амортизировать', 7),
  singular1stPerson: Word('амортизирую', 7),
  singular2ndPerson: Word('амортизируешь', 7),
  singular3rdPerson: Word('амортизирует', 7),
  plural1stPerson: Word('амортизируем', 7),
  plural2ndPerson: Word('амортизируете', 7),
  plural3rdPerson: Word('амортизируют', 7),
  masculinePast: Word('амортизировал', 7),
  femininePast: Word('амортизировала', 7),
  neuterPast: Word('амортизировало', 7),
  pluralPast: Word('амортизировали', 7),
  imperativeInformal: Word('амортизируй', 7),
  imperativeFormal: Word('амортизируйте', 7),
  imperfect: [],
};

perfectVerbs.set(амортизировать.name.text, амортизировать);

export { амортизировать };
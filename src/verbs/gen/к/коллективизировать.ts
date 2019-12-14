import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const коллективизировать: PerfectVerb = {
  name: Word('коллективизировать', 11),
  singular1stPerson: Word('коллективизирую', 11),
  singular2ndPerson: Word('коллективизируешь', 11),
  singular3rdPerson: Word('коллективизирует', 11),
  plural1stPerson: Word('коллективизируем', 11),
  plural2ndPerson: Word('коллективизируете', 11),
  plural3rdPerson: Word('коллективизируют', 11),
  masculinePast: Word('коллективизировал', 11),
  femininePast: Word('коллективизировала', 11),
  neuterPast: Word('коллективизировало', 11),
  pluralPast: Word('коллективизировали', 11),
  imperativeInformal: Word('коллективизируй', 11),
  imperativeFormal: Word('коллективизируйте', 11),
  imperfect: [],
};

perfectVerbs.set(коллективизировать.name.text, коллективизировать);

export { коллективизировать };
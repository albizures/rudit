import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const монополизировать: PerfectVerb = {
  name: Word('монополизировать', 9),
  singular1stPerson: Word('монополизирую', 9),
  singular2ndPerson: Word('монополизируешь', 9),
  singular3rdPerson: Word('монополизирует', 9),
  plural1stPerson: Word('монополизируем', 9),
  plural2ndPerson: Word('монополизируете', 9),
  plural3rdPerson: Word('монополизируют', 9),
  masculinePast: Word('монополизировал', 9),
  femininePast: Word('монополизировала', 9),
  neuterPast: Word('монополизировало', 9),
  pluralPast: Word('монополизировали', 9),
  imperativeInformal: Word('монополизируй', 9),
  imperativeFormal: Word('монополизируйте', 9),
  imperfect: [],
};

perfectVerbs.set(монополизировать.name.text, монополизировать);

export { монополизировать };
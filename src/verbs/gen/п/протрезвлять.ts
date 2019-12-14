import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const протрезвлять: PerfectVerb = {
  name: Word('протрезвлять', 9),
  singular1stPerson: Word('протрезвляю', 9),
  singular2ndPerson: Word('протрезвляешь', 9),
  singular3rdPerson: Word('протрезвляет', 9),
  plural1stPerson: Word('протрезвляем', 9),
  plural2ndPerson: Word('протрезвляете', 9),
  plural3rdPerson: Word('протрезвляют', 9),
  masculinePast: Word('протрезвлял', 9),
  femininePast: Word('протрезвляла', 9),
  neuterPast: Word('протрезвляло', 9),
  pluralPast: Word('протрезвляли', 9),
  imperativeInformal: Word('протрезвляй', 9),
  imperativeFormal: Word('протрезвляйте', 9),
  imperfect: [],
};

perfectVerbs.set(протрезвлять.name.text, протрезвлять);

export { протрезвлять };
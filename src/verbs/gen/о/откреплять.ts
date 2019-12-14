import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const откреплять: PerfectVerb = {
  name: Word('откреплять', 7),
  singular1stPerson: Word('открепляю', 7),
  singular2ndPerson: Word('открепляешь', 7),
  singular3rdPerson: Word('открепляет', 7),
  plural1stPerson: Word('открепляем', 7),
  plural2ndPerson: Word('открепляете', 7),
  plural3rdPerson: Word('открепляют', 7),
  masculinePast: Word('откреплял', 7),
  femininePast: Word('открепляла', 7),
  neuterPast: Word('открепляло', 7),
  pluralPast: Word('открепляли', 7),
  imperativeInformal: Word('открепляй', 7),
  imperativeFormal: Word('открепляйте', 7),
  imperfect: [],
};

perfectVerbs.set(откреплять.name.text, откреплять);

export { откреплять };
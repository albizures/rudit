import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const руководствоваться: PerfectVerb = {
  name: Word('руководствоваться', 5),
  singular1stPerson: Word('руководствуюсь', 5),
  singular2ndPerson: Word('руководствуешься', 5),
  singular3rdPerson: Word('руководствуется', 5),
  plural1stPerson: Word('руководствуемся', 5),
  plural2ndPerson: Word('руководствуетесь', 5),
  plural3rdPerson: Word('руководствуются', 5),
  masculinePast: Word('руководствовался', 5),
  femininePast: Word('руководствовалась', 5),
  neuterPast: Word('руководствовалось', 5),
  pluralPast: Word('руководствовались', 5),
  imperativeInformal: Word('руководствуйся', 5),
  imperativeFormal: Word('руководствуйтесь', 5),
  imperfect: [],
};

perfectVerbs.set(руководствоваться.name.text, руководствоваться);

export { руководствоваться };
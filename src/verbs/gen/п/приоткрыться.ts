import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приоткрыться: PerfectVerb = {
  name: Word('приоткрыться', 7),
  singular1stPerson: Word('приоткроюсь', 7),
  singular2ndPerson: Word('приоткроешься', 7),
  singular3rdPerson: Word('приоткроется', 7),
  plural1stPerson: Word('приоткроемся', 7),
  plural2ndPerson: Word('приоткроетесь', 7),
  plural3rdPerson: Word('приоткроются', 7),
  masculinePast: Word('приоткрылся', 7),
  femininePast: Word('приоткрылась', 7),
  neuterPast: Word('приоткрылось', 7),
  pluralPast: Word('приоткрылись', 7),
  imperativeInformal: Word('приоткройся', 7),
  imperativeFormal: Word('приоткройтесь', 7),
  imperfect: [],
};

perfectVerbs.set(приоткрыться.name.text, приоткрыться);

export { приоткрыться };
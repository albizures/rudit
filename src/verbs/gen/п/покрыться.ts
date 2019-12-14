import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const покрыться: PerfectVerb = {
  name: Word('покрыться', 4),
  singular1stPerson: Word('покроюсь', 4),
  singular2ndPerson: Word('покроешься', 4),
  singular3rdPerson: Word('покроется', 4),
  plural1stPerson: Word('покроемся', 4),
  plural2ndPerson: Word('покроетесь', 4),
  plural3rdPerson: Word('покроются', 4),
  masculinePast: Word('покрылся', 4),
  femininePast: Word('покрылась', 4),
  neuterPast: Word('покрылось', 4),
  pluralPast: Word('покрылись', 4),
  imperativeInformal: Word('покройся', 4),
  imperativeFormal: Word('покройтесь', 4),
  imperfect: [],
};

perfectVerbs.set(покрыться.name.text, покрыться);

export { покрыться };
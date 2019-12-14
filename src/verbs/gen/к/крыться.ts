import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const крыться: PerfectVerb = {
  name: Word('крыться', 2),
  singular1stPerson: Word('кроюсь', 2),
  singular2ndPerson: Word('кроешься', 2),
  singular3rdPerson: Word('кроется', 2),
  plural1stPerson: Word('кроемся', 2),
  plural2ndPerson: Word('кроетесь', 2),
  plural3rdPerson: Word('кроются', 2),
  masculinePast: Word('крылся', 2),
  femininePast: Word('крылась', 2),
  neuterPast: Word('крылось', 2),
  pluralPast: Word('крылись', 2),
  imperativeInformal: Word('кройся', 2),
  imperativeFormal: Word('кройтесь', 2),
  imperfect: [],
};

perfectVerbs.set(крыться.name.text, крыться);

export { крыться };
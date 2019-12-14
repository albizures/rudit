import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const открыться: PerfectVerb = {
  name: Word('открыться', 4),
  singular1stPerson: Word('откроюсь', 4),
  singular2ndPerson: Word('откроешься', 4),
  singular3rdPerson: Word('откроется', 4),
  plural1stPerson: Word('откроемся', 4),
  plural2ndPerson: Word('откроетесь', 4),
  plural3rdPerson: Word('откроются', 4),
  masculinePast: Word('открылся', 4),
  femininePast: Word('открылась', 4),
  neuterPast: Word('открылось', 4),
  pluralPast: Word('открылись', 4),
  imperativeInformal: Word('откройся', 4),
  imperativeFormal: Word('откройтесь', 4),
  imperfect: [],
};

perfectVerbs.set(открыться.name.text, открыться);

export { открыться };
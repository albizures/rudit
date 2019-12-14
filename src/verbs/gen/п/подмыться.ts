import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подмыться: PerfectVerb = {
  name: Word('подмыться', 4),
  singular1stPerson: Word('подмоюсь', 4),
  singular2ndPerson: Word('подмоешься', 4),
  singular3rdPerson: Word('подмоется', 4),
  plural1stPerson: Word('подмоемся', 4),
  plural2ndPerson: Word('подмоетесь', 4),
  plural3rdPerson: Word('подмоются', 4),
  masculinePast: Word('подмылся', 4),
  femininePast: Word('подмылась', 4),
  neuterPast: Word('подмылось', 4),
  pluralPast: Word('подмылись', 4),
  imperativeInformal: Word('подмойся', 4),
  imperativeFormal: Word('подмойтесь', 4),
  imperfect: [],
};

perfectVerbs.set(подмыться.name.text, подмыться);

export { подмыться };
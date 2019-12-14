import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const омыться: PerfectVerb = {
  name: Word('омыться', 2),
  singular1stPerson: Word('омоюсь', 2),
  singular2ndPerson: Word('омоешься', 2),
  singular3rdPerson: Word('омоется', 2),
  plural1stPerson: Word('омоемся', 2),
  plural2ndPerson: Word('омоетесь', 2),
  plural3rdPerson: Word('омоются', 2),
  masculinePast: Word('омылся', 2),
  femininePast: Word('омылась', 2),
  neuterPast: Word('омылось', 2),
  pluralPast: Word('омылись', 2),
  imperativeInformal: Word('омойся', 2),
  imperativeFormal: Word('омойтесь', 2),
  imperfect: [],
};

perfectVerbs.set(омыться.name.text, омыться);

export { омыться };
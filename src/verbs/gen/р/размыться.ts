import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const размыться: PerfectVerb = {
  name: Word('размыться', 4),
  singular1stPerson: Word('размоюсь', 4),
  singular2ndPerson: Word('размоешься', 4),
  singular3rdPerson: Word('размоется', 4),
  plural1stPerson: Word('размоемся', 4),
  plural2ndPerson: Word('размоетесь', 4),
  plural3rdPerson: Word('размоются', 4),
  masculinePast: Word('размылся', 4),
  femininePast: Word('размылась', 4),
  neuterPast: Word('размылось', 4),
  pluralPast: Word('размылись', 4),
  imperativeInformal: Word('размойся', 4),
  imperativeFormal: Word('размойтесь', 4),
  imperfect: [],
};

perfectVerbs.set(размыться.name.text, размыться);

export { размыться };
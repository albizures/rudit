import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const намыться: PerfectVerb = {
  name: Word('намыться', 3),
  singular1stPerson: Word('намоюсь', 3),
  singular2ndPerson: Word('намоешься', 3),
  singular3rdPerson: Word('намоется', 3),
  plural1stPerson: Word('намоемся', 3),
  plural2ndPerson: Word('намоетесь', 3),
  plural3rdPerson: Word('намоются', 3),
  masculinePast: Word('намылся', 3),
  femininePast: Word('намылась', 3),
  neuterPast: Word('намылось', 3),
  pluralPast: Word('намылись', 3),
  imperativeInformal: Word('намойся', 3),
  imperativeFormal: Word('намойтесь', 3),
  imperfect: [],
};

perfectVerbs.set(намыться.name.text, намыться);

export { намыться };
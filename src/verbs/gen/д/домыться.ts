import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const домыться: PerfectVerb = {
  name: Word('домыться', 3),
  singular1stPerson: Word('домоюсь', 3),
  singular2ndPerson: Word('домоешься', 3),
  singular3rdPerson: Word('домоется', 3),
  plural1stPerson: Word('домоемся', 3),
  plural2ndPerson: Word('домоетесь', 3),
  plural3rdPerson: Word('домоются', 3),
  masculinePast: Word('домылся', 3),
  femininePast: Word('домылась', 3),
  neuterPast: Word('домылось', 3),
  pluralPast: Word('домылись', 3),
  imperativeInformal: Word('домойся', 3),
  imperativeFormal: Word('домойтесь', 3),
  imperfect: [],
};

perfectVerbs.set(домыться.name.text, домыться);

export { домыться };
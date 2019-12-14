import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const увёртываться: PerfectVerb = {
  name: Word('увёртываться', 2),
  singular1stPerson: Word('увёртываюсь', 2),
  singular2ndPerson: Word('увёртываешься', 2),
  singular3rdPerson: Word('увёртывается', 2),
  plural1stPerson: Word('увёртываемся', 2),
  plural2ndPerson: Word('увёртываетесь', 2),
  plural3rdPerson: Word('увёртываются', 2),
  masculinePast: Word('увёртывался', 2),
  femininePast: Word('увёртывалась', 2),
  neuterPast: Word('увёртывалось', 2),
  pluralPast: Word('увёртывались', 2),
  imperativeInformal: Word('увёртывайся', 2),
  imperativeFormal: Word('увёртывайтесь', 2),
  imperfect: [],
};

perfectVerbs.set(увёртываться.name.text, увёртываться);

export { увёртываться };
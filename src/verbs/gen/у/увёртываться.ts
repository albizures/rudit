import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const увёртываться: PerfectVerb = {
  name: Word('увёртываться', 7),
  singular1stPerson: Word('увёртываюсь', 7),
  singular2ndPerson: Word('увёртываешься', 7),
  singular3rdPerson: Word('увёртывается', 7),
  plural1stPerson: Word('увёртываемся', 7),
  plural2ndPerson: Word('увёртываетесь', 7),
  plural3rdPerson: Word('увёртываются', 7),
  masculinePast: Word('увёртывался', 7),
  femininePast: Word('увёртывалась', 7),
  neuterPast: Word('увёртывалось', 7),
  pluralPast: Word('увёртывались', 7),
  imperativeInformal: Word('увёртывайся', 7),
  imperativeFormal: Word('увёртывайтесь', 7),
  imperfect: [],
};

perfectVerbs.set(увёртываться.name.text, увёртываться);

export { увёртываться };
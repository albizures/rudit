import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const окутываться: PerfectVerb = {
  name: Word('окутываться', 2),
  singular1stPerson: Word('окутываюсь', 2),
  singular2ndPerson: Word('окутываешься', 2),
  singular3rdPerson: Word('окутывается', 2),
  plural1stPerson: Word('окутываемся', 2),
  plural2ndPerson: Word('окутываетесь', 2),
  plural3rdPerson: Word('окутываются', 2),
  masculinePast: Word('окутывался', 2),
  femininePast: Word('окутывалась', 2),
  neuterPast: Word('окутывалось', 2),
  pluralPast: Word('окутывались', 2),
  imperativeInformal: Word('окутывайся', 2),
  imperativeFormal: Word('окутывайтесь', 2),
  imperfect: [],
};

perfectVerbs.set(окутываться.name.text, окутываться);

export { окутываться };
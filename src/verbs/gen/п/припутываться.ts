import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const припутываться: PerfectVerb = {
  name: Word('припутываться', 4),
  singular1stPerson: Word('припутываюсь', 4),
  singular2ndPerson: Word('припутываешься', 4),
  singular3rdPerson: Word('припутывается', 4),
  plural1stPerson: Word('припутываемся', 4),
  plural2ndPerson: Word('припутываетесь', 4),
  plural3rdPerson: Word('припутываются', 4),
  masculinePast: Word('припутывался', 4),
  femininePast: Word('припутывалась', 4),
  neuterPast: Word('припутывалось', 4),
  pluralPast: Word('припутывались', 4),
  imperativeInformal: Word('припутывайся', 4),
  imperativeFormal: Word('припутывайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(припутываться.name.text, припутываться);

export { припутываться };
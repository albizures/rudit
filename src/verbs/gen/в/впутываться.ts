import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const впутываться: PerfectVerb = {
  name: Word('впутываться', 2),
  singular1stPerson: Word('впутываюсь', 2),
  singular2ndPerson: Word('впутываешься', 2),
  singular3rdPerson: Word('впутывается', 2),
  plural1stPerson: Word('впутываемся', 2),
  plural2ndPerson: Word('впутываетесь', 2),
  plural3rdPerson: Word('впутываются', 2),
  masculinePast: Word('впутывался', 2),
  femininePast: Word('впутывалась', 2),
  neuterPast: Word('впутывалось', 2),
  pluralPast: Word('впутывались', 2),
  imperativeInformal: Word('впутывайся', 2),
  imperativeFormal: Word('впутывайтесь', 2),
  imperfect: [],
};

perfectVerbs.set(впутываться.name.text, впутываться);

export { впутываться };
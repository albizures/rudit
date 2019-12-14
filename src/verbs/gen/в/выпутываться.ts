import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выпутываться: PerfectVerb = {
  name: Word('выпутываться', 3),
  singular1stPerson: Word('выпутываюсь', 3),
  singular2ndPerson: Word('выпутываешься', 3),
  singular3rdPerson: Word('выпутывается', 3),
  plural1stPerson: Word('выпутываемся', 3),
  plural2ndPerson: Word('выпутываетесь', 3),
  plural3rdPerson: Word('выпутываются', 3),
  masculinePast: Word('выпутывался', 3),
  femininePast: Word('выпутывалась', 3),
  neuterPast: Word('выпутывалось', 3),
  pluralPast: Word('выпутывались', 3),
  imperativeInformal: Word('выпутывайся', 3),
  imperativeFormal: Word('выпутывайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(выпутываться.name.text, выпутываться);

export { выпутываться };
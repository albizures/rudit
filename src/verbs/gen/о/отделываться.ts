import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отделываться: PerfectVerb = {
  name: Word('отделываться', 3),
  singular1stPerson: Word('отделываюсь', 3),
  singular2ndPerson: Word('отделываешься', 3),
  singular3rdPerson: Word('отделывается', 3),
  plural1stPerson: Word('отделываемся', 3),
  plural2ndPerson: Word('отделываетесь', 3),
  plural3rdPerson: Word('отделываются', 3),
  masculinePast: Word('отделывался', 3),
  femininePast: Word('отделывалась', 3),
  neuterPast: Word('отделывалось', 3),
  pluralPast: Word('отделывались', 3),
  imperativeInformal: Word('отделывайся', 3),
  imperativeFormal: Word('отделывайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(отделываться.name.text, отделываться);

export { отделываться };
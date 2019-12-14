import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отзываться: PerfectVerb = {
  name: Word('отзываться', 5),
  singular1stPerson: Word('отзываюсь', 5),
  singular2ndPerson: Word('отзываешься', 5),
  singular3rdPerson: Word('отзывается', 5),
  plural1stPerson: Word('отзываемся', 5),
  plural2ndPerson: Word('отзываетесь', 5),
  plural3rdPerson: Word('отзываются', 5),
  masculinePast: Word('отзывался', 5),
  femininePast: Word('отзывалась', 5),
  neuterPast: Word('отзывалось', 5),
  pluralPast: Word('отзывались', 5),
  imperativeInformal: Word('отзывайся', 5),
  imperativeFormal: Word('отзывайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(отзываться.name.text, отзываться);

export { отзываться };
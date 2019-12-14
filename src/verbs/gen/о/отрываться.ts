import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отрываться: PerfectVerb = {
  name: Word('отрываться', 5),
  singular1stPerson: Word('отрываюсь', 5),
  singular2ndPerson: Word('отрываешься', 5),
  singular3rdPerson: Word('отрывается', 5),
  plural1stPerson: Word('отрываемся', 5),
  plural2ndPerson: Word('отрываетесь', 5),
  plural3rdPerson: Word('отрываются', 5),
  masculinePast: Word('отрывался', 5),
  femininePast: Word('отрывалась', 5),
  neuterPast: Word('отрывалось', 5),
  pluralPast: Word('отрывались', 5),
  imperativeInformal: Word('отрывайся', 5),
  imperativeFormal: Word('отрывайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(отрываться.name.text, отрываться);

export { отрываться };
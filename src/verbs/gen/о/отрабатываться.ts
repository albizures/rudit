import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отрабатываться: PerfectVerb = {
  name: Word('отрабатываться', 5),
  singular1stPerson: Word('отрабатываюсь', 5),
  singular2ndPerson: Word('отрабатываешься', 5),
  singular3rdPerson: Word('отрабатывается', 5),
  plural1stPerson: Word('отрабатываемся', 5),
  plural2ndPerson: Word('отрабатываетесь', 5),
  plural3rdPerson: Word('отрабатываются', 5),
  masculinePast: Word('отрабатывался', 5),
  femininePast: Word('отрабатывалась', 5),
  neuterPast: Word('отрабатывалось', 5),
  pluralPast: Word('отрабатывались', 5),
  imperativeInformal: Word('отрабатывайся', 5),
  imperativeFormal: Word('отрабатывайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(отрабатываться.name.text, отрабатываться);

export { отрабатываться };
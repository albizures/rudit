import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отмываться: PerfectVerb = {
  name: Word('отмываться', 5),
  singular1stPerson: Word('отмываюсь', 5),
  singular2ndPerson: Word('отмываешься', 5),
  singular3rdPerson: Word('отмывается', 5),
  plural1stPerson: Word('отмываемся', 5),
  plural2ndPerson: Word('отмываетесь', 5),
  plural3rdPerson: Word('отмываются', 5),
  masculinePast: Word('отмывался', 5),
  femininePast: Word('отмывалась', 5),
  neuterPast: Word('отмывалось', 5),
  pluralPast: Word('отмывались', 5),
  imperativeInformal: Word('отмывайся', 5),
  imperativeFormal: Word('отмывайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(отмываться.name.text, отмываться);

export { отмываться };
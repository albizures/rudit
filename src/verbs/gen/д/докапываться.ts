import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const докапываться: PerfectVerb = {
  name: Word('докапываться', 3),
  singular1stPerson: Word('докапываюсь', 3),
  singular2ndPerson: Word('докапываешься', 3),
  singular3rdPerson: Word('докапывается', 3),
  plural1stPerson: Word('докапываемся', 3),
  plural2ndPerson: Word('докапываетесь', 3),
  plural3rdPerson: Word('докапываются', 3),
  masculinePast: Word('докапывался', 3),
  femininePast: Word('докапывалась', 3),
  neuterPast: Word('докапывалось', 3),
  pluralPast: Word('докапывались', 3),
  imperativeInformal: Word('докапывайся', 3),
  imperativeFormal: Word('докапывайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(докапываться.name.text, докапываться);

export { докапываться };
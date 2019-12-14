import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перебрасываться: PerfectVerb = {
  name: Word('перебрасываться', 6),
  singular1stPerson: Word('перебрасываюсь', 6),
  singular2ndPerson: Word('перебрасываешься', 6),
  singular3rdPerson: Word('перебрасывается', 6),
  plural1stPerson: Word('перебрасываемся', 6),
  plural2ndPerson: Word('перебрасываетесь', 6),
  plural3rdPerson: Word('перебрасываются', 6),
  masculinePast: Word('перебрасывался', 6),
  femininePast: Word('перебрасывалась', 6),
  neuterPast: Word('перебрасывалось', 6),
  pluralPast: Word('перебрасывались', 6),
  imperativeInformal: Word('перебрасывайся', 6),
  imperativeFormal: Word('перебрасывайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(перебрасываться.name.text, перебрасываться);

export { перебрасываться };
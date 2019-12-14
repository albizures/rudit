import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вытанцовываться: PerfectVerb = {
  name: Word('вытанцовываться', 6),
  singular1stPerson: Word('вытанцовываюсь', 6),
  singular2ndPerson: Word('вытанцовываешься', 6),
  singular3rdPerson: Word('вытанцовывается', 6),
  plural1stPerson: Word('вытанцовываемся', 6),
  plural2ndPerson: Word('вытанцовываетесь', 6),
  plural3rdPerson: Word('вытанцовываются', 6),
  masculinePast: Word('вытанцовывался', 6),
  femininePast: Word('вытанцовывалась', 6),
  neuterPast: Word('вытанцовывалось', 6),
  pluralPast: Word('вытанцовывались', 6),
  imperativeInformal: Word('вытанцовывайся', 6),
  imperativeFormal: Word('вытанцовывайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(вытанцовываться.name.text, вытанцовываться);

export { вытанцовываться };
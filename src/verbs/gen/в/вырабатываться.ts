import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вырабатываться: PerfectVerb = {
  name: Word('вырабатываться', 5),
  singular1stPerson: Word('вырабатываюсь', 5),
  singular2ndPerson: Word('вырабатываешься', 5),
  singular3rdPerson: Word('вырабатывается', 5),
  plural1stPerson: Word('вырабатываемся', 5),
  plural2ndPerson: Word('вырабатываетесь', 5),
  plural3rdPerson: Word('вырабатываются', 5),
  masculinePast: Word('вырабатывался', 5),
  femininePast: Word('вырабатывалась', 5),
  neuterPast: Word('вырабатывалось', 5),
  pluralPast: Word('вырабатывались', 5),
  imperativeInformal: Word('вырабатывайся', 5),
  imperativeFormal: Word('вырабатывайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(вырабатываться.name.text, вырабатываться);

export { вырабатываться };
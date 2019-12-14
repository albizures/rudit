import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вырываться: PerfectVerb = {
  name: Word('вырываться', 5),
  singular1stPerson: Word('вырываюсь', 5),
  singular2ndPerson: Word('вырываешься', 5),
  singular3rdPerson: Word('вырывается', 5),
  plural1stPerson: Word('вырываемся', 5),
  plural2ndPerson: Word('вырываетесь', 5),
  plural3rdPerson: Word('вырываются', 5),
  masculinePast: Word('вырывался', 5),
  femininePast: Word('вырывалась', 5),
  neuterPast: Word('вырывалось', 5),
  pluralPast: Word('вырывались', 5),
  imperativeInformal: Word('вырывайся', 5),
  imperativeFormal: Word('вырывайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(вырываться.name.text, вырываться);

export { вырываться };
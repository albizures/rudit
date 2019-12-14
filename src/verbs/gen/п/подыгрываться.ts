import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подыгрываться: PerfectVerb = {
  name: Word('подыгрываться', 3),
  singular1stPerson: Word('подыгрываюсь', 3),
  singular2ndPerson: Word('подыгрываешься', 3),
  singular3rdPerson: Word('подыгрывается', 3),
  plural1stPerson: Word('подыгрываемся', 3),
  plural2ndPerson: Word('подыгрываетесь', 3),
  plural3rdPerson: Word('подыгрываются', 3),
  masculinePast: Word('подыгрывался', 3),
  femininePast: Word('подыгрывалась', 3),
  neuterPast: Word('подыгрывалось', 3),
  pluralPast: Word('подыгрывались', 3),
  imperativeInformal: Word('подыгрывайся', 3),
  imperativeFormal: Word('подыгрывайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(подыгрываться.name.text, подыгрываться);

export { подыгрываться };
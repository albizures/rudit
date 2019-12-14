import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const взрываться: PerfectVerb = {
  name: Word('взрываться', 5),
  singular1stPerson: Word('взрываюсь', 5),
  singular2ndPerson: Word('взрываешься', 5),
  singular3rdPerson: Word('взрывается', 5),
  plural1stPerson: Word('взрываемся', 5),
  plural2ndPerson: Word('взрываетесь', 5),
  plural3rdPerson: Word('взрываются', 5),
  masculinePast: Word('взрывался', 5),
  femininePast: Word('взрывалась', 5),
  neuterPast: Word('взрывалось', 5),
  pluralPast: Word('взрывались', 5),
  imperativeInformal: Word('взрывайся', 5),
  imperativeFormal: Word('взрывайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(взрываться.name.text, взрываться);

export { взрываться };
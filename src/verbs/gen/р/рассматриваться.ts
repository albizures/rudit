import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const рассматриваться: PerfectVerb = {
  name: Word('рассматриваться', 5),
  singular1stPerson: Word('рассматриваюсь', 5),
  singular2ndPerson: Word('рассматриваешься', 5),
  singular3rdPerson: Word('рассматривается', 5),
  plural1stPerson: Word('рассматриваемся', 5),
  plural2ndPerson: Word('рассматриваетесь', 5),
  plural3rdPerson: Word('рассматриваются', 5),
  masculinePast: Word('рассматривался', 5),
  femininePast: Word('рассматривалась', 5),
  neuterPast: Word('рассматривалось', 5),
  pluralPast: Word('рассматривались', 5),
  imperativeInformal: Word('рассматривайся', 5),
  imperativeFormal: Word('рассматривайтесь', 5),
  imperfect: ['рассмотреться'],
};

perfectVerbs.set(рассматриваться.name.text, рассматриваться);

export { рассматриваться };
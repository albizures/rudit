import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const надеться: PerfectVerb = {
  name: Word('надеться', 3),
  singular1stPerson: Word('наденусь', 3),
  singular2ndPerson: Word('наденешься', 3),
  singular3rdPerson: Word('наденется', 3),
  plural1stPerson: Word('наденемся', 3),
  plural2ndPerson: Word('наденетесь', 3),
  plural3rdPerson: Word('наденутся', 3),
  masculinePast: Word('наделся', 3),
  femininePast: Word('наделась', 3),
  neuterPast: Word('наделось', 3),
  pluralPast: Word('наделись', 3),
  imperativeInformal: Word('наденься', 3),
  imperativeFormal: Word('наденьтесь', 3),
  imperfect: [],
};

perfectVerbs.set(надеться.name.text, надеться);

export { надеться };
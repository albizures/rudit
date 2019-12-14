import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const засаливаться: PerfectVerb = {
  name: Word('засаливаться', 3),
  singular1stPerson: Word('засаливаюсь', 3),
  singular2ndPerson: Word('засаливаешься', 3),
  singular3rdPerson: Word('засаливается', 3),
  plural1stPerson: Word('засаливаемся', 3),
  plural2ndPerson: Word('засаливаетесь', 3),
  plural3rdPerson: Word('засаливаются', 3),
  masculinePast: Word('засаливался', 3),
  femininePast: Word('засаливалась', 3),
  neuterPast: Word('засаливалось', 3),
  pluralPast: Word('засаливались', 3),
  imperativeInformal: Word('засаливайся', 3),
  imperativeFormal: Word('засаливайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(засаливаться.name.text, засаливаться);

export { засаливаться };
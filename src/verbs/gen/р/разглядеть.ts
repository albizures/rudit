import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разглядеть: PerfectVerb = {
  name: Word('разглядеть', 7),
  singular1stPerson: Word('разгляжу', 7),
  singular2ndPerson: Word('разглядишь', 7),
  singular3rdPerson: Word('разглядит', 7),
  plural1stPerson: Word('разглядим', 7),
  plural2ndPerson: Word('разглядите', 7),
  plural3rdPerson: Word('разглядят', 7),
  masculinePast: Word('разглядел', 7),
  femininePast: Word('разглядела', 7),
  neuterPast: Word('разглядело', 7),
  pluralPast: Word('разглядели', 7),
  imperativeInformal: Word('разгляди', 7),
  imperativeFormal: Word('разглядите', 7),
  imperfect: ['разглядывать'],
};

perfectVerbs.set(разглядеть.name.text, разглядеть);

export { разглядеть };
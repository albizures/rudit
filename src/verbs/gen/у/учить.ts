import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const учить: PerfectVerb = {
  name: Word('учить', 2),
  singular1stPerson: Word('учу', 2),
  singular2ndPerson: Word('учишь', 0),
  singular3rdPerson: Word('учит', 0),
  plural1stPerson: Word('учим', 0),
  plural2ndPerson: Word('учите', 0),
  plural3rdPerson: Word('учат', 0),
  masculinePast: Word('учил', 2),
  femininePast: Word('учила', 2),
  neuterPast: Word('учило', 2),
  pluralPast: Word('учили', 2),
  imperativeInformal: Word('учи', 2),
  imperativeFormal: Word('учите', 2),
  imperfect: ['выучить','научить','обучить'],
};

perfectVerbs.set(учить.name.text, учить);

export { учить };
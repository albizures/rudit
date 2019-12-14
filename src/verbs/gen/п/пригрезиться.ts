import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пригрезиться: PerfectVerb = {
  name: Word('пригрезиться', 5),
  singular1stPerson: Word('пригрежусь', 5),
  singular2ndPerson: Word('пригрезишься', 5),
  singular3rdPerson: Word('пригрезится', 5),
  plural1stPerson: Word('пригрезимся', 5),
  plural2ndPerson: Word('пригрезитесь', 5),
  plural3rdPerson: Word('пригрезятся', 5),
  masculinePast: Word('пригрезился', 5),
  femininePast: Word('пригрезилась', 5),
  neuterPast: Word('пригрезилось', 5),
  pluralPast: Word('пригрезились', 5),
  imperativeInformal: Word('пригрезься', 5),
  imperativeFormal: Word('пригрезьтесь', 5),
  imperfect: [],
};

perfectVerbs.set(пригрезиться.name.text, пригрезиться);

export { пригрезиться };
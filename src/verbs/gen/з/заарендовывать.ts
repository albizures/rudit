import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заарендовывать: PerfectVerb = {
  name: Word('заарендовывать', 7),
  singular1stPerson: Word('заарендовываю', 7),
  singular2ndPerson: Word('заарендовываешь', 7),
  singular3rdPerson: Word('заарендовывает', 7),
  plural1stPerson: Word('заарендовываем', 7),
  plural2ndPerson: Word('заарендовываете', 7),
  plural3rdPerson: Word('заарендовывают', 7),
  masculinePast: Word('заарендовывал', 7),
  femininePast: Word('заарендовывала', 7),
  neuterPast: Word('заарендовывало', 7),
  pluralPast: Word('заарендовывали', 7),
  imperativeInformal: Word('заарендовывай', 7),
  imperativeFormal: Word('заарендовывайте', 7),
  imperfect: [],
};

perfectVerbs.set(заарендовывать.name.text, заарендовывать);

export { заарендовывать };
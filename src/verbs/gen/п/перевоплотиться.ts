import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перевоплотиться: PerfectVerb = {
  name: Word('перевоплотиться', 10),
  singular1stPerson: Word('перевоплощусь', 10),
  singular2ndPerson: Word('перевоплотишься', 10),
  singular3rdPerson: Word('перевоплотится', 10),
  plural1stPerson: Word('перевоплотимся', 10),
  plural2ndPerson: Word('перевоплотитесь', 10),
  plural3rdPerson: Word('перевоплотятся', 10),
  masculinePast: Word('перевоплотился', 10),
  femininePast: Word('перевоплотилась', 10),
  neuterPast: Word('перевоплотилось', 10),
  pluralPast: Word('перевоплотились', 10),
  imperativeInformal: Word('перевоплотись', 10),
  imperativeFormal: Word('перевоплотитесь', 10),
  imperfect: [],
};

perfectVerbs.set(перевоплотиться.name.text, перевоплотиться);

export { перевоплотиться };
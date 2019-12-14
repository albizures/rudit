import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пристыдить: PerfectVerb = {
  name: Word('пристыдить', 7),
  singular1stPerson: Word('пристыжу', 7),
  singular2ndPerson: Word('пристыдишь', 7),
  singular3rdPerson: Word('пристыдит', 7),
  plural1stPerson: Word('пристыдим', 7),
  plural2ndPerson: Word('пристыдите', 7),
  plural3rdPerson: Word('пристыдят', 7),
  masculinePast: Word('пристыдил', 7),
  femininePast: Word('пристыдила', 7),
  neuterPast: Word('пристыдило', 7),
  pluralPast: Word('пристыдили', 7),
  imperativeInformal: Word('пристыди', 7),
  imperativeFormal: Word('пристыдите', 7),
  imperfect: [],
};

perfectVerbs.set(пристыдить.name.text, пристыдить);

export { пристыдить };
import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const называться: PerfectVerb = {
  name: Word('называться', 5),
  singular1stPerson: Word('называюсь', 5),
  singular2ndPerson: Word('называешься', 5),
  singular3rdPerson: Word('называется', 5),
  plural1stPerson: Word('называемся', 5),
  plural2ndPerson: Word('называетесь', 5),
  plural3rdPerson: Word('называются', 5),
  masculinePast: Word('назывался', 5),
  femininePast: Word('называлась', 5),
  neuterPast: Word('называлось', 5),
  pluralPast: Word('назывались', 5),
  imperativeInformal: Word('называйся', 5),
  imperativeFormal: Word('называйтесь', 5),
  imperfect: ['назваться'],
};

perfectVerbs.set(называться.name.text, называться);

export { называться };
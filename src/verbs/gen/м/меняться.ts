import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const меняться: PerfectVerb = {
  name: Word('меняться', 3),
  singular1stPerson: Word('меняюсь', 3),
  singular2ndPerson: Word('меняешься', 3),
  singular3rdPerson: Word('меняется', 3),
  plural1stPerson: Word('меняемся', 3),
  plural2ndPerson: Word('меняетесь', 3),
  plural3rdPerson: Word('меняются', 3),
  masculinePast: Word('менялся', 3),
  femininePast: Word('менялась', 3),
  neuterPast: Word('менялось', 3),
  pluralPast: Word('менялись', 3),
  imperativeInformal: Word('меняйся', 3),
  imperativeFormal: Word('меняйтесь', 3),
  imperfect: ['поменяться'],
};

perfectVerbs.set(меняться.name.text, меняться);

export { меняться };